import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MarketplaceEntryList } from "./marketplaceEntry/MarketplaceEntryList";
import { MarketplaceEntryCreate } from "./marketplaceEntry/MarketplaceEntryCreate";
import { MarketplaceEntryEdit } from "./marketplaceEntry/MarketplaceEntryEdit";
import { MarketplaceEntryShow } from "./marketplaceEntry/MarketplaceEntryShow";
import { AiAgentList } from "./aiAgent/AiAgentList";
import { AiAgentCreate } from "./aiAgent/AiAgentCreate";
import { AiAgentEdit } from "./aiAgent/AiAgentEdit";
import { AiAgentShow } from "./aiAgent/AiAgentShow";
import { DashboardDataList } from "./dashboardData/DashboardDataList";
import { DashboardDataCreate } from "./dashboardData/DashboardDataCreate";
import { DashboardDataEdit } from "./dashboardData/DashboardDataEdit";
import { DashboardDataShow } from "./dashboardData/DashboardDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Bold AI Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MarketplaceEntry"
          list={MarketplaceEntryList}
          edit={MarketplaceEntryEdit}
          create={MarketplaceEntryCreate}
          show={MarketplaceEntryShow}
        />
        <Resource
          name="AiAgent"
          list={AiAgentList}
          edit={AiAgentEdit}
          create={AiAgentCreate}
          show={AiAgentShow}
        />
        <Resource
          name="DashboardData"
          list={DashboardDataList}
          edit={DashboardDataEdit}
          create={DashboardDataCreate}
          show={DashboardDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
