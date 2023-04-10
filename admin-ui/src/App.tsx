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
import { UsePointList } from "./usePoint/UsePointList";
import { UsePointCreate } from "./usePoint/UsePointCreate";
import { UsePointEdit } from "./usePoint/UsePointEdit";
import { UsePointShow } from "./usePoint/UsePointShow";
import { GetPointList } from "./getPoint/GetPointList";
import { GetPointCreate } from "./getPoint/GetPointCreate";
import { GetPointEdit } from "./getPoint/GetPointEdit";
import { GetPointShow } from "./getPoint/GetPointShow";
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
          name="UsePoint"
          list={UsePointList}
          edit={UsePointEdit}
          create={UsePointCreate}
          show={UsePointShow}
        />
        <Resource
          name="GetPoint"
          list={GetPointList}
          edit={GetPointEdit}
          create={GetPointCreate}
          show={GetPointShow}
        />
      </Admin>
    </div>
  );
};

export default App;
