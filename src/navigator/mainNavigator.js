import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList148575Navigator from '../features/NotificationList148575/navigator';
import Maps148574Navigator from '../features/Maps148574/navigator';
import UserProfile148535Navigator from '../features/UserProfile148535/navigator';
import Maps148516Navigator from '../features/Maps148516/navigator';
import Settings148494Navigator from '../features/Settings148494/navigator';
import Settings148479Navigator from '../features/Settings148479/navigator';
import NotificationList148478Navigator from '../features/NotificationList148478/navigator';
import Maps148477Navigator from '../features/Maps148477/navigator';
import SignIn11148476Navigator from '../features/SignIn11148476/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList148575: { screen: NotificationList148575Navigator },
Maps148574: { screen: Maps148574Navigator },
UserProfile148535: { screen: UserProfile148535Navigator },
Maps148516: { screen: Maps148516Navigator },
Settings148494: { screen: Settings148494Navigator },
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
