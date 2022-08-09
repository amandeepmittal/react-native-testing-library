"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[94],{1133:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"react-navigation",title:"React Navigation"},c=void 0,l={unversionedId:"react-navigation",id:"react-navigation",title:"React Navigation",description:"This section deals with integrating @testing-library/react-native with react-navigation, using Jest.",source:"@site/docs/ReactNavigation.md",sourceDirName:".",slug:"/react-navigation",permalink:"/react-native-testing-library/docs/react-navigation",draft:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/docs/ReactNavigation.md",tags:[],version:"current",frontMatter:{id:"react-navigation",title:"React Navigation"},sidebar:"docs",previous:{title:"Understanding Act function",permalink:"/react-native-testing-library/docs/understanding-act"},next:{title:"Redux Integration",permalink:"/react-native-testing-library/docs/redux-integration"}},p={},m=[{value:"Stack Navigator",id:"stack-navigator",level:2},{value:"Setting up",id:"setting-up",level:3},{value:"Setting up the test environment",id:"setting-up-the-test-environment",level:3},{value:"Example tests",id:"example-tests",level:3},{value:"Drawer Navigator",id:"drawer-navigator",level:2},{value:"Setting up",id:"setting-up-1",level:3},{value:"Setting up the test environment",id:"setting-up-the-test-environment-1",level:3},{value:"Example tests",id:"example-tests-1",level:3},{value:"Running tests",id:"running-tests",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section deals with integrating ",(0,i.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation"),", using Jest."),(0,i.kt)("h2",{id:"stack-navigator"},"Stack Navigator"),(0,i.kt)("h3",{id:"setting-up"},"Setting up"),(0,i.kt)("p",null,"Install the packages required for React Navigation. For this example, we will use a ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/stack-navigator/"},"stack navigator")," to transition to the second page when any of the items are clicked on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add @react-native-community/masked-view @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens\n")),(0,i.kt)("p",null,"Create an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/AppNavigator.js"},(0,i.kt)("inlineCode",{parentName:"a"},"./AppNavigator.js"))," component which will list the navigation stack:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import 'react-native-gesture-handler';\nimport * as React from 'react';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nimport HomeScreen from './screens/HomeScreen';\nimport DetailsScreen from './screens/DetailsScreen';\n\nconst { Screen, Navigator } = createStackNavigator();\n\nexport default function Navigation() {\n  const options = {};\n\n  return (\n    <Navigator>\n      <Screen name=\"Home\" component={HomeScreen} />\n      <Screen options={options} name=\"Details\" component={DetailsScreen} />\n    </Navigator>\n  );\n}\n")),(0,i.kt)("p",null,"Create your two screens which we will transition to and from them. The homescreen, found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/screens/HomeScreen.js"},(0,i.kt)("inlineCode",{parentName:"a"},"./screens/HomeScreen.js")),", contains a list of elements presented in a list view. On tap of any of these items will move to the details screen with the item number:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport {\n  Text,\n  View,\n  FlatList,\n  TouchableOpacity,\n  StyleSheet,\n} from 'react-native';\n\nexport default function HomeScreen({ navigation }) {\n  const [items] = React.useState(\n    new Array(20).fill(null).map((_, idx) => idx + 1)\n  );\n\n  const onOpacityPress = (item) => navigation.navigate('Details', item);\n\n  return (\n    <View>\n      <Text style={styles.header}>List of numbers from 1 to 20</Text>\n      <FlatList\n        keyExtractor={(_, idx) => `${idx}`}\n        data={items}\n        renderItem={({ item }) => (\n          <TouchableOpacity\n            onPress={() => onOpacityPress(item)}\n            style={styles.row}\n          >\n            <Text>Item number {item}</Text>\n          </TouchableOpacity>\n        )}\n      />\n    </View>\n  );\n}\n\nconst divider = '#DDDDDD';\n\nconst styles = StyleSheet.create({\n  header: {\n    fontSize: 20,\n    textAlign: 'center',\n    marginVertical: 16,\n  },\n  row: {\n    paddingVertical: 16,\n    paddingHorizontal: 24,\n    borderBottomColor: divider,\n    borderBottomWidth: 1,\n  },\n});\n")),(0,i.kt)("p",null,"The details screen, found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/screens/DetailsScreen.js"},(0,i.kt)("inlineCode",{parentName:"a"},"./screens/DetailsScreen.js")),", contains a header with the item number passed from the home screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// ./screens/DetailsScreen.js\nimport * as React from 'react';\nimport { Text, StyleSheet, View } from 'react-native';\n\nexport default function DetailsScreen(props) {\n  const item = Number.parseInt(props.route.params, 10);\n\n  return (\n    <View>\n      <Text style={styles.header}>Showing details for {item}</Text>\n      <Text style={styles.body}>the number you have chosen is {item}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  header: {\n    fontSize: 20,\n    textAlign: 'center',\n    marginVertical: 16,\n  },\n  body: {\n    textAlign: 'center',\n  },\n});\n")),(0,i.kt)("h3",{id:"setting-up-the-test-environment"},"Setting up the test environment"),(0,i.kt)("p",null,"Install required dev dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add -D jest @testing-library/react-native\n")),(0,i.kt)("p",null,"Create your ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file (or place the following properties in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),' as a "jest" property)'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  preset: 'react-native',\n  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],\n  transformIgnorePatterns: [\n    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',\n  ],\n};\n")),(0,i.kt)("p",null,"Notice the 2 entries that don't come with the default React Native project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setupFiles")," \u2013 an array of files that Jest is going to execute before running your tests. In this case, we run ",(0,i.kt)("inlineCode",{parentName:"li"},"react-native-gesture-handler/jestSetup.js")," which sets up necessary mocks for ",(0,i.kt)("inlineCode",{parentName:"li"},"react-native-gesture-handler")," native module"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transformIgnorePatterns")," \u2013 an array of paths that Jest ignores when transforming code. In this case, the negative lookahead regular expression is used, to tell Jest to transform (with Babel) every package inside ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/")," that starts with ",(0,i.kt)("inlineCode",{parentName:"li"},"react-native"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@react-native-community")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"@react-navigation")," (added by us, the rest is in ",(0,i.kt)("inlineCode",{parentName:"li"},"react-native")," preset by default, so you don't have to worry about it).")),(0,i.kt)("h3",{id:"example-tests"},"Example tests"),(0,i.kt)("p",null,"For this example, we are going to test out two things. The first thing is that the page is laid out as expected. The second, and most important, is that the page will transition to the detail screen when any item is tapped on."),(0,i.kt)("p",null,"Let's add a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/__tests__/AppNavigator.js"},(0,i.kt)("inlineCode",{parentName:"a"},"AppNavigator.test.js"))," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/__tests__")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { render, screen, fireEvent } from '@testing-library/react-native';\n\nimport AppNavigator from '../AppNavigator';\n\n// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420\n// Use with React Native <= 0.63\njest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');\n\n// Use this instead with React Native >= 0.64\n// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');\n\ndescribe('Testing react navigation', () => {\n  test('page contains the header and 10 items', async () => {\n    const component = (\n      <NavigationContainer>\n        <AppNavigator />\n      </NavigationContainer>\n    );\n\n    render(component);\n\n    const header = await screen.findByText('List of numbers from 1 to 20');\n    const items = await screen.findAllByText(/Item number/);\n\n    expect(header).toBeTruthy();\n    expect(items.length).toBe(10);\n  });\n\n  test('clicking on one item takes you to the details screen', async () => {\n    const component = (\n      <NavigationContainer>\n        <AppNavigator />\n      </NavigationContainer>\n    );\n\n    render(component);\n    const toClick = await screen.findByText('Item number 5');\n\n    fireEvent(toClick, 'press');\n    const newHeader = await screen.findByText('Showing details for 5');\n    const newBody = await screen.findByText('the number you have chosen is 5');\n\n    expect(newHeader).toBeTruthy();\n    expect(newBody).toBeTruthy();\n  });\n});\n")),(0,i.kt)("h2",{id:"drawer-navigator"},"Drawer Navigator"),(0,i.kt)("p",null,"Testing the Drawer Navigation requires an additional setup step for mocking the Reanimated library."),(0,i.kt)("h3",{id:"setting-up-1"},"Setting up"),(0,i.kt)("p",null,"Install the packages required for React Navigation. For this example, we will use a ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/drawer-navigator/"},"drawer navigator")," to transition between a home screen and an additional screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add @react-native-community/masked-view @react-navigation/native @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens\n")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/DrawerAppNavigator.js"},(0,i.kt)("inlineCode",{parentName:"a"},"./DrawerAppNavigator.js"))," component which will list the navigation stack:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import 'react-native-gesture-handler';\nimport React from 'react';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\n\nconst { Screen, Navigator } = createDrawerNavigator();\n\nexport default function Navigation() {\n  return (\n    <Navigator>\n      <Screen name=\"Home\" component={HomeScreen} />\n      <Screen name=\"Notifications\" component={NotificationsScreen} />\n    </Navigator>\n  );\n}\n")),(0,i.kt)("p",null,"Create your two screens which we will transition to and from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Welcome!</Text>\n      <Button\n        onPress={() => navigation.navigate('Notifications')}\n        title=\"Go to notifications\"\n      />\n    </View>\n  );\n}\n\nfunction NotificationsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>This is the notifications screen</Text>\n      <Button onPress={() => navigation.goBack()} title=\"Go back home\" />\n    </View>\n  );\n}\n")),(0,i.kt)("h3",{id:"setting-up-the-test-environment-1"},"Setting up the test environment"),(0,i.kt)("p",null,"Install required dev dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add -D jest @testing-library/react-native\n")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/jest-setup.js"},(0,i.kt)("inlineCode",{parentName:"a"},"mock file"))," necessary for your tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import 'react-native-gesture-handler/jestSetup';\n\njest.mock('react-native-reanimated', () => {\n  const Reanimated = require('react-native-reanimated/mock');\n\n  // The mock for `call` immediately calls the callback which is incorrect\n  // So we override it with a no-op\n  Reanimated.default.call = () => {};\n\n  return Reanimated;\n});\n\n// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing\njest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');\n")),(0,i.kt)("p",null,"Create your ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file (or place the following properties in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),' as a "jest" property)'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  preset: 'react-native',\n  setupFiles: ['./jest-setup.js'],\n  transformIgnorePatterns: [\n    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',\n  ],\n};\n")),(0,i.kt)("p",null,"Make sure that the path to the file in ",(0,i.kt)("inlineCode",{parentName:"p"},"setupFiles")," is correct. Jest will run these files before running your tests, so it's the best place to put your global mocks."),(0,i.kt)("p",null,"This setup is copied from the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/testing/"},"React Navigation documentation"),"."),(0,i.kt)("h3",{id:"example-tests-1"},"Example tests"),(0,i.kt)("p",null,"For this example, we are going to test out two things. The first thing is that the screen is loaded correctly. The second, and most important, is that the page will transition to the notifications screen when the button is tapped on."),(0,i.kt)("p",null,"Let's add a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/__tests__/DrawerAppNavigator.js"},(0,i.kt)("inlineCode",{parentName:"a"},"DrawerAppNavigator.test.js"))," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/__tests__")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { render, screen, fireEvent } from '@testing-library/react-native';\n\nimport DrawerAppNavigator from '../DrawerAppNavigator';\n\ndescribe('Testing react navigation', () => {\n  test('screen contains a button linking to the notifications page', async () => {\n    const component = (\n      <NavigationContainer>\n        <DrawerAppNavigator />\n      </NavigationContainer>\n    );\n\n    render(component);\n    const button = await screen.findByText('Go to notifications');\n\n    expect(button).toBeTruthy();\n  });\n\n  test('clicking on the button takes you to the notifications screen', async () => {\n    const component = (\n      <NavigationContainer>\n        <DrawerAppNavigator />\n      </NavigationContainer>\n    );\n\n    render(component);\n    const oldScreen = screen.queryByText('Welcome!');\n    const button = await screen.findByText('Go to notifications');\n\n    expect(oldScreen).toBeTruthy();\n\n    fireEvent(button, 'press');\n    const newScreen = await screen.findByText('This is the notifications screen');\n\n    expect(newScreen).toBeTruthy();\n  });\n});\n")),(0,i.kt)("h2",{id:"running-tests"},"Running tests"),(0,i.kt)("p",null,"To run the tests, place a test script inside your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n')),(0,i.kt)("p",null,"And run the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," script with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm test")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test"),"."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);