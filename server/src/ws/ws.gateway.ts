import { Inject, Injectable, Logger, forwardRef } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server ,WebSocket} from 'ws';
import { MetagasConfigFile } from '../metagas.config';
import { GatewatService } from './ws.service';

//WebSocket中没有id属性，添加id属性，用id关联客户端
interface MyWebSocket extends WebSocket {
  id: string;
}

const connections: WebSocket[] = [];
@WebSocketGateway(3002,{
  cors: {
    origin: '*',
  },
})
export class WsStartGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('AppGateway');
  //存储客户端的client信息
  private connectedClients: { [key: string]: WebSocket } = {};
  
  constructor(
    @Inject(forwardRef(() => GatewatService))
    private readonly gatewatService: GatewatService,
    ) {
  }

  @WebSocketServer()server!: Server;
  //服务器初始化
  afterInit(server: Server) {
    console.log("初始化成功")
    this.logger.log('Initialized');
  }
  //客户端连接服务器
  handleConnection(client: MyWebSocket, ...args: any[]) {
    console.log("000000")
    //把客户端的client保存到connectedClients中
    client.on('message', (data: string) => {
      try {
        const message = JSON.parse(data);
        if (message.type === 'registerClient') {
          const clientId = message.clientId;
          client.id = clientId;
          this.connectedClients[clientId] = client;
          this.logger.log(`Client connected: ${clientId}`);
        }
      } catch (e:any) {
        this.logger.error(`handleConnection error: ${e.message}`);
      }
    });
  }
  //客户端与服务器断开
  handleDisconnect(client: MyWebSocket) {
    console.log("1111111")
  const id = client.id;
  delete this.connectedClients[id];
  this.logger.log(`Client disconnected: ${id}`);
  }

  //向单个指定用户发送信息
  sendToClient(clientId: string, message: any) {
    console.log("--------向单个指定用户发消息----------")
    const client = this.connectedClients[clientId];
    if (client) {
      client.send(JSON.stringify(message));
    }
  }
  //向多个指定用户发送信息
  sendToClients(clientIds: string[], message: any) {
    console.log("--------向多个指定用户发消息----------")
    clientIds.forEach(clientId => {
      const client = this.connectedClients[clientId];
      if (client) {
        client.send(JSON.stringify(message));
      }
    });
  }
  //向所有客户端发送信息
  sendToAllUser(message: string) {
    console.log("--------向所有客户端发消息----------")
   // console.log( WebSocket.OPEN)
    this.server.clients.forEach(client => {
         client.send(message);
      // if (client.readyState === WebSocket.OPEN) {
      //   client.send(message);
      // }
    });
  }


  @SubscribeMessage('status')
  status(@MessageBody() data: any, @ConnectedSocket() client: MyWebSocket): any {
    // const userId = client.id;
    console.log('收到消息 client:', data);

    // 解析 data 字符串，获取 friendid 参数
    data = JSON.parse(data);

    const friendid = data['friendid'];
    const userId = data['userid'];
    console.log('friendid:', friendid);
    console.log('----登录用户id-----', userId);

    // 获取配置文件中关注好友的消息信息
    const addFriendMessage = JSON.stringify(MetagasConfigFile.messages.find(msg => msg.name === "关注好友")?.config ?? {});
    this.gatewatService.addFriendMessage(userId, friendid,addFriendMessage );

   return { types: 'status', data: data };
  }

}








