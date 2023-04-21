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
import { HabitusList } from "./habitus/HabitusList";
import { HabitusCreate } from "./habitus/HabitusCreate";
import { HabitusEdit } from "./habitus/HabitusEdit";
import { HabitusShow } from "./habitus/HabitusShow";
import { StatusList } from "./status/StatusList";
import { StatusCreate } from "./status/StatusCreate";
import { StatusEdit } from "./status/StatusEdit";
import { StatusShow } from "./status/StatusShow";
import { IncomeMetaGasList } from "./incomeMetaGas/IncomeMetaGasList";
import { IncomeMetaGasCreate } from "./incomeMetaGas/IncomeMetaGasCreate";
import { IncomeMetaGasEdit } from "./incomeMetaGas/IncomeMetaGasEdit";
import { IncomeMetaGasShow } from "./incomeMetaGas/IncomeMetaGasShow";
import { ExpenseMetaGasList } from "./expenseMetaGas/ExpenseMetaGasList";
import { ExpenseMetaGasCreate } from "./expenseMetaGas/ExpenseMetaGasCreate";
import { ExpenseMetaGasEdit } from "./expenseMetaGas/ExpenseMetaGasEdit";
import { ExpenseMetaGasShow } from "./expenseMetaGas/ExpenseMetaGasShow";
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
          name="Habitus"
          list={HabitusList}
          edit={HabitusEdit}
          create={HabitusCreate}
          show={HabitusShow}
        />
        <Resource
          name="Status"
          list={StatusList}
          edit={StatusEdit}
          create={StatusCreate}
          show={StatusShow}
        />
        <Resource
          name="IncomeMetaGas"
          list={IncomeMetaGasList}
          edit={IncomeMetaGasEdit}
          create={IncomeMetaGasCreate}
          show={IncomeMetaGasShow}
        />
        <Resource
          name="ExpenseMetaGas"
          list={ExpenseMetaGasList}
          edit={ExpenseMetaGasEdit}
          create={ExpenseMetaGasCreate}
          show={ExpenseMetaGasShow}
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
