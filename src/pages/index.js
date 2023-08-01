/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';

export default () => (
  <div>
    <Text
      variant='caps'
      as='ul'
      sx={{
        display: 'flex',
        flexFlow: 'row wrap',
        listStyleType: 'none',
        marginBottom: 'xxl',
        padding: 0,
        li: {
          marginRight: 'm',
        },
      }}
    >
      <li>home</li>
      <li>blog</li>
      <li>shop</li>
      <li>about</li>
      <li>contact</li>
    </Text>
    <Text variant='headline' as='h1' sx={{ marginBottom: 'm' }}>
      Rediscovering music
    </Text>
    <Text variant='caps' as='h4' sx={{ marginBottom: 'xl' }}>
      Authored by John Smith
    </Text>
    <Text variant='body' as='p' sx={{ marginBottom: 'xs' }}>
      I'm baby craft beer schlitz seitan put a bird on it yr aesthetic. Hexagon
      street art truffaut chicharrones. Ugh offal cray typewriter lyft paleo.
      Shoreditch viral tousled ugh shaman. Vinyl pinterest shaman butcher marfa
      coloring book scenester humblebrag truffaut +1 unicorn kitsch. Paleo
      meggings yr, portland keytar four loko viral post-ironic literally
      biodiesel la croix waistcoat. Ramps portland neutra synth
    </Text>
    <Text variant='sectionHeader' sx={{ marginTop: 'l', marginBottom: 's' }}>
      Authentic Sounds and Vinyls
    </Text>
    <Text variant='body' as='p' sx={{ marginBottom: 'xs' }}>
      I'm baby craft beer schlitz seitan put a bird on it yr aesthetic. Hexagon
      street art truffaut chicharrones.Vinyl pinterest shaman butcher marfa
      coloring book scenester humblebrag truffaut +1 unicorn kitsch.
    </Text>
    <img
      src='https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      sx={{ marginTop: 'm', marginBottom: 'xs', maxWidth: '100%' }}
      alt='photo by Alina Vilchenko'
    />
    <Text variant='caption' as='h6' sx={{ marginBottom: 'm' }}>
      Photo by Alina Vilchenko on Pexels. Vinyl pinterest shaman butcher marfa
      coloring book truffaut +1 unicorn.
    </Text>
    <Text variant='body' as='p' sx={{ marginBottom: 'xs' }}>
      I'm baby craft beer schlitz seitan put a bird on it yr aesthetic. Hexagon
      street art truffaut chicharrones.Vinyl pinterest shaman butcher marfa
      coloring book scenester humblebrag truffaut +1 unicorn kitsch.
    </Text>
    <Text variant='sectionHeader' sx={{ marginTop: 'l', marginBottom: 's' }}>
      The Best Summertime Sounds
    </Text>
    <Text variant='body' as='p' sx={{ marginBottom: 'xs' }}>
      Lomo retro shaman XOXO narwhal edison bulb. Keffiyeh pabst kinfolk lyft,
      fam fanny pack yuccie VHS ramps iceland hot chicken poke. Waistcoat
      actually stumptown, tattooed post-ironic tacos adaptogen gastropub yuccie
      pop-up meggings. Actually activated charcoal bicycle rights blog plaid.
    </Text>
    <img
      src='https://images.pexels.com/photos/1300578/pexels-photo-1300578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      sx={{ marginTop: 'm', marginBottom: 'xs', maxWidth: '100%' }}
      alt='photo by Dids'
    />
    <Text variant='caption' as='h6' sx={{ marginBottom: 'm' }}>
      Photo by by Dids on Pexels. Vinyl pinterest shaman butcher marfa coloring
      book truffaut +1 unicorn kitsch
    </Text>
    <Text variant='body' as='p' sx={{ marginBottom: 'xs' }}>
      Lomo retro shaman XOXO narwhal edison bulb. Keffiyeh pabst kinfolk lyft,
      fam fanny pack yuccie VHS ramps iceland hot chicken poke. Waistcoat
      actually stumptown, tattooed post-ironic tacos adaptogen gastropub yuccie
      pop-up meggings. Actually activated charcoal bicycle rights blog plaid.
    </Text>
  </div>
);
