import { EnumMessageMessageType } from "./message/base/EnumMessageMessageType";

interface Message {
  name: string;
  config: MetagasConfig;
}[];

interface MetagasConfig {
  category: string;
  messageContent: {
    messageTitle: string,
    messageText : string,
  };
  messageType: EnumMessageMessageType;
  amount: number;
  action: string;
  status: string;
}

export module MetagasConfigFile  {
  export const messages:Message[] = [ 
    {
      "name": "新用户注册",
      "config": {
        "category": "新用户注册",
        "messageContent":{
          "messageTitle": "您完成了新用户注册，获得20个元气值。",
          "messageText": ""//用于展示的特殊要求
        },
        "messageType": EnumMessageMessageType.RegisterNewuser,
        "amount": 20,
        "action": "完成注册",
        "status": "当前元气值"
      }
    },
    {
      "name": "完成体质检测",
      "config": {
        "category": "完成体质检测",
        "messageContent": {
          "messageTitle": "您完成了当前体质检测，获得10个元气值。",
          "messageText": "体质检测结果为${currentHabitus}"//用于展示的特殊要求
        },
        "messageType": EnumMessageMessageType.HealthCheck,
        "amount": 10,
        "action": "完成体质检测",
        "status": "当前元气值"
      }
    },
    {
      "name": "推荐新用户",
      "config": {
        "category": "推荐新用户",
        "messageContent": {
          "messageTitle": "您成功推荐了新用户注册，获得30个元气值。",
          "messageText": ""//用于展示的特殊要求
        },
        "messageType": EnumMessageMessageType.ReferNewuser,
        "amount": 30,
        "action": "推荐新用户",
        "status": "当前元气值"
      }
    },
    {
      "name": "关注好友",
      "config": {
        "category": "关注好友",
        "messageContent": {
          "messageTitle": "您的朋友${friendName}关注了您。",
          "messageText": "点击查看ta的健康信息。"//用于展示的特殊要求
        },
        "messageType": EnumMessageMessageType.FollowFriend,
        "amount": 0,//消息提醒，此处不需要元气值
        "action": "关注好友",
        "status": "关注好友"
      }
    },
    {
      "name": "更新健康信息",
      "config": {
        "category": "更新健康信息",
        "messageContent": {
          "messageTitle": "您的好友${friendName}更新了健康信息。",
          "messageText": "体质检测结果为 ${currentHabitus}"//用于展示的特殊要求
        },
        "messageType": EnumMessageMessageType.UpdateHealth,
        "amount": 0,//消息提醒，此处不需要元气值
        "action": "更新健康信息",
        "status": ""//更新健康信息提醒，和状态无关
      }
    },
    {
      "name": "健康问诊",
      "config": {
        "category": "健康问诊",
        "messageContent": {
          "messageTitle": "您的好友${friendName}进行了健康问诊。",
          "messageText": "点击ta可查看详情"//用于展示的特殊要求
        },
        "messageType": EnumMessageMessageType.HealthInquiry,
        "amount": 0,//消息提醒，此处不需要元气值
        "action": "健康问诊",
        "status": ""//健康问诊提醒，和状态无关
      }
    },
  ];
};
