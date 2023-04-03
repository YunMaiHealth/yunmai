import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { HubitusCheckupList } from "./hubitusCheckup/HubitusCheckupList";
import { HubitusCheckupCreate } from "./hubitusCheckup/HubitusCheckupCreate";
import { HubitusCheckupEdit } from "./hubitusCheckup/HubitusCheckupEdit";
import { HubitusCheckupShow } from "./hubitusCheckup/HubitusCheckupShow";
import { UserStatusList } from "./userStatus/UserStatusList";
import { UserStatusCreate } from "./userStatus/UserStatusCreate";
import { UserStatusEdit } from "./userStatus/UserStatusEdit";
import { UserStatusShow } from "./userStatus/UserStatusShow";
import { MessageNotifyList } from "./messageNotify/MessageNotifyList";
import { MessageNotifyCreate } from "./messageNotify/MessageNotifyCreate";
import { MessageNotifyEdit } from "./messageNotify/MessageNotifyEdit";
import { MessageNotifyShow } from "./messageNotify/MessageNotifyShow";
import { EventLogList } from "./eventLog/EventLogList";
import { EventLogCreate } from "./eventLog/EventLogCreate";
import { EventLogEdit } from "./eventLog/EventLogEdit";
import { EventLogShow } from "./eventLog/EventLogShow";
import { UserQuestionList } from "./userQuestion/UserQuestionList";
import { UserQuestionCreate } from "./userQuestion/UserQuestionCreate";
import { UserQuestionEdit } from "./userQuestion/UserQuestionEdit";
import { UserQuestionShow } from "./userQuestion/UserQuestionShow";
import { ReplyQuestionList } from "./replyQuestion/ReplyQuestionList";
import { ReplyQuestionCreate } from "./replyQuestion/ReplyQuestionCreate";
import { ReplyQuestionEdit } from "./replyQuestion/ReplyQuestionEdit";
import { ReplyQuestionShow } from "./replyQuestion/ReplyQuestionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UserService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="HubitusCheckup"
          list={HubitusCheckupList}
          edit={HubitusCheckupEdit}
          create={HubitusCheckupCreate}
          show={HubitusCheckupShow}
        />
        <Resource
          name="UserStatus"
          list={UserStatusList}
          edit={UserStatusEdit}
          create={UserStatusCreate}
          show={UserStatusShow}
        />
        <Resource
          name="MessageNotify"
          list={MessageNotifyList}
          edit={MessageNotifyEdit}
          create={MessageNotifyCreate}
          show={MessageNotifyShow}
        />
        <Resource
          name="EventLog"
          list={EventLogList}
          edit={EventLogEdit}
          create={EventLogCreate}
          show={EventLogShow}
        />
        <Resource
          name="UserQuestion"
          list={UserQuestionList}
          edit={UserQuestionEdit}
          create={UserQuestionCreate}
          show={UserQuestionShow}
        />
        <Resource
          name="ReplyQuestion"
          list={ReplyQuestionList}
          edit={ReplyQuestionEdit}
          create={ReplyQuestionCreate}
          show={ReplyQuestionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
