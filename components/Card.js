import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableWithoutFeedback, View } from 'react-native';
import { SocialIcon, Icon } from 'react-native-elements';

import { Block, Text, theme } from 'galio-framework';
import { Button, Input, tabs } from '../components';

import { nowTheme } from '../constants';
import { block } from 'react-native-reanimated';

class Card extends React.Component {
  render() {
    const {
      navigation,
      item,
      horizontal,
      full,
      style,
      ctaColor,
      imageStyle,
      ctaRight,
      titleStyle,
    } = this.props;

    const imageStyles = [full ? styles.fullImage : styles.horizontalImage, imageStyle];
    const titleStyles = [styles.cardTitle, titleStyle];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [
      styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow,
    ];

    return (
      <View row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block flex style={imgContainer}>
            <Image resizeMode="cover" source={item.image} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block flex space="between" style={styles.cardDescription}>
            <Block flex>
              <Text
                style={{ fontFamily: 'montserrat-regular' }}
                size={14}
                style={titleStyles}
                color={nowTheme.COLORS.SECONDARY}
              >
                {item.title}
              </Text>
              {item.subtitle ? (
                <Block flex center>
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={32}
                    color={nowTheme.COLORS.BLACK}
                  >
                    {item.subtitle}
                  </Text>
                </Block>
              ) : (
                <Block />
              )}
              {item.description ? (
                <Block flex center>
                  <Text
                    style={{ fontFamily: 'montserrat-regular', textAlign: 'center', padding: 15 }}
                    size={14}
                    color={'#9A9A9A'}
                  >
                    {item.description}
                  </Text>
                </Block>
              ) : (
                <Block />
              )}
              {item.body ? (
                <Block flex left>
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={12}
                    color={nowTheme.COLORS.TEXT}
                  >
                    {item.body}
                  </Text>
                </Block>
              ) : (
                <Block />
              )}
            </Block>
            <View style={styles.timeIcon}>
              <View style={styles.articleTime}>
                <Text>ProPakistani - 29 Dec 2020</Text>
              </View>
              <View style={styles.socialIcon}>
                <Icon name="heartbeat" type="font-awesome" />
                <Icon name="rowing" />
              </View>
            </View>

            <Block>
              <Text style={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
  ctaRight: PropTypes.bool,
  titleStyle: PropTypes.any,
  textBodyStyle: PropTypes.any,
};
// console.log(Card);
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 4,
    padding: 0,
  },
  btns: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    // paddingHorizontal: 9,
    paddingTop: 7,
    paddingBottom: 15,
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  description: {
    paddingTop: 10,
  },
  imageContainer: {
    flex: 1,
    // borderRadius: 3,
    // elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 200,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  fullImage: {
    flex: 1,
    alignItems: 'stretch',
    width: '100%',
    height: 400,
  },
  shadow: {
    shadowColor: '#8898AA',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  timeIcon: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 5,
    borderBottomColor: '#010101',
    borderBottomWidth: 1,
  },
  articleTime: {
    width: '50%',
    alignItems: 'flex-start',
    fontSize: 5,
    color: 'grey',
    fontFamily: 'montserrat-bold',
  },
  socialIcon: {
    width: '50%',
    textAlign: 'right',
    // flex: 'right',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',

    flexDirection: 'row',
  },
});

export default withNavigation(Card);
