import React from 'react';
import nowTheme from '../constants/Theme';
import { StyleSheet, Dimensions, ScrollView, createBottomTabNavigator } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import * as SQLite from 'expo-sqlite';

import { Card, Button, Icon, Input, tabs } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');
const { height } = 200;
class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.articles}>
        <Block flex>
          {/* <Card item={articles[0]} horizontal />
          <Card item={articles[0]} horizontal /> */}
          {/* <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block> */}
          {/* <Card item={articles[3]} horizontal /> */}

          <Card item={articles[4]} full />
          <Card item={articles[4]} full />
          <Card item={articles[4]} full />
          <Card item={articles[4]} full />
        </Block>
      </ScrollView>
    );
  };
  renderOptions = () => {
    // const { navigation, optionLeft, optionRight } = this.props;
    return (
      <Block row style={styles.options}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Button
            shadowless
            style={styles.tab}
            // onPress={() => console.log('Button Clicked')}
          >
            <Block row middle>
              <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}>
                {'Beauty'}
              </Text>
            </Block>
          </Button>
          <Button
            shadowless
            style={styles.tab}
            // onPress={() => navigation.navigate('Pro')}
          >
            <Block row middle>
              <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}>
                {'Fashion'}
              </Text>
            </Block>
          </Button>
          <Button
            shadowless
            style={styles.tab}
            // onPress={() => navigation.navigate('Pro')}
          >
            <Block row middle>
              <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}>
                {'Fashion'}
              </Text>
            </Block>
          </Button>
          <Button
            shadowless
            style={styles.tab}
            //  onPress={() => navigation.navigate('Pro')}
          >
            <Block row middle>
              <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}>
                {'Fashion'}
              </Text>
            </Block>
          </Button>
          <Button
            shadowless
            style={styles.tab}
            //  onPress={() => navigation.navigate('Pro')}
          >
            <Block row middle>
              <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}>
                {'Fashion'}
              </Text>
            </Block>
          </Button>
        </ScrollView>
      </Block>
    );
  };
  render() {
    const { options } = this.props;
    const {
      back,
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      navigation,
      ...props
    } = this.props;
    // return <Block>{this.renderCategories()}</Block>;
    return (
      <Block flex center style={styles.home}>
        {this.renderOptions()}
        {this.renderArticles()}
      </Block>
    );
    // return (
    //   <Block style={styles.headerStyles}>
    //     <Text style={styles.headerStyles}> Dispatch App</Text>
    //     {this.renderCategories()}
    //   </Block>
    //   // <Block flex center style={styles.home}>
    //   // {this.renderCategories()}
    //   //   </Block>
    // );
  }
}
const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    // width: width - theme.SIZES.BASE * 1,
    width: width,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
  headerStyles: {
    backgroundColor: 'white',
  },
  HeadingStyle: {
    color: 'white',
  },
  options: {
    backgroundColor: 'white',
    marginBottom: 0,
    marginTop: 0,
    elevation: 4,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: nowTheme.COLORS.HEADER,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.25,
    borderRadius: 0,
    borderWidth: 0,
    height: 20,
    elevation: 0,
  },
});
export default Home;
