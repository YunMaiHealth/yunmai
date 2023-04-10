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
import { MessageNotifyList } from "./messageNotify/MessageNotifyList";
import { MessageNotifyCreate } from "./messageNotify/MessageNotifyCreate";
import { MessageNotifyEdit } from "./messageNotify/MessageNotifyEdit";
import { MessageNotifyShow } from "./messageNotify/MessageNotifyShow";
import { EventLogList } from "./eventLog/EventLogList";
import { EventLogCreate } from "./eventLog/EventLogCreate";
import { EventLogEdit } from "./eventLog/EventLogEdit";
import { EventLogShow } from "./eventLog/EventLogShow";
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
      </Admin>
    </div>
  );
};

export default App;
