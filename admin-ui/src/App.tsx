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
import { HubitusList } from "./hubitus/HubitusList";
import { HubitusCreate } from "./hubitus/HubitusCreate";
import { HubitusEdit } from "./hubitus/HubitusEdit";
import { HubitusShow } from "./hubitus/HubitusShow";
import { StatusList } from "./status/StatusList";
import { StatusCreate } from "./status/StatusCreate";
import { StatusEdit } from "./status/StatusEdit";
import { StatusShow } from "./status/StatusShow";
import { GetpointList } from "./getpoint/GetpointList";
import { GetpointCreate } from "./getpoint/GetpointCreate";
import { GetpointEdit } from "./getpoint/GetpointEdit";
import { GetpointShow } from "./getpoint/GetpointShow";
import { UsepointList } from "./usepoint/UsepointList";
import { UsepointCreate } from "./usepoint/UsepointCreate";
import { UsepointEdit } from "./usepoint/UsepointEdit";
import { UsepointShow } from "./usepoint/UsepointShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { InquiryList } from "./inquiry/InquiryList";
import { InquiryCreate } from "./inquiry/InquiryCreate";
import { InquiryEdit } from "./inquiry/InquiryEdit";
import { InquiryShow } from "./inquiry/InquiryShow";
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
          name="Hubitus"
          list={HubitusList}
          edit={HubitusEdit}
          create={HubitusCreate}
          show={HubitusShow}
        />
        <Resource
          name="Status"
          list={StatusList}
          edit={StatusEdit}
          create={StatusCreate}
          show={StatusShow}
        />
        <Resource
          name="Getpoint"
          list={GetpointList}
          edit={GetpointEdit}
          create={GetpointCreate}
          show={GetpointShow}
        />
        <Resource
          name="Usepoint"
          list={UsepointList}
          edit={UsepointEdit}
          create={UsepointCreate}
          show={UsepointShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Inquiry"
          list={InquiryList}
          edit={InquiryEdit}
          create={InquiryCreate}
          show={InquiryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
