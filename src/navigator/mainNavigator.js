import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings148479Navigator from '../features/Settings148479/navigator';
import NotificationList148478Navigator from '../features/NotificationList148478/navigator';
import Maps148477Navigator from '../features/Maps148477/navigator';
import SignIn11148476Navigator from '../features/SignIn11148476/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings148479: { screen: Settings148479Navigator },
NotificationList148478: { screen: NotificationList148478Navigator },
Maps148477: { screen: Maps148477Navigator },
SignIn11148476: { screen: SignIn11148476Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
