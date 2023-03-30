import React, { useContext } from "react";
<<<<<<< HEAD
import { Header } from "@mantine/core";
import { SettingsContext } from "../context";
import './Header.scss';

const HeaderComponent = () => {

    const defUser = useContext(SettingsContext);

    return(
    <Header className="header">
        <h1>
        To Do
        </h1>
        <h3>{defUser.incomplete}</h3>
    </Header>
    );
=======
import { Group } from "@mantine/core";
import { Select, Switch } from "@mantine/core";
import { SettingsContext } from "../Context/Settings/Index";

const Header = () => {

  const settings = useContext(SettingsContext);

  return (
    <Group position="center">
      <label>Display Items:
      <Select
        placeholder="Pick one"
        data={[
          { value: 5, label: "5" },
          { value: 10, label: "10" },
          { value: 15, label: "15" },
          { value: 20, label: "20" },
        ]}
        onChange={settings.setItemsPrPage}
      />
      </label>
      <label>Completed:
      <Switch
        checked={settings.showCompleted} 
        onChange={(e) => settings.changeShowCompleted(e.currentTarget.checked)}
        />
      </label>
    </Group>
  );
>>>>>>> context-methods3
};

export default Header;