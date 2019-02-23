import { Card, Actions, CardBody } from 'oah-ui';
import React from 'react';
import { Link } from 'gatsby';

const ActionsPage = () => {
  const items = [
    {
      icon: 'icon ion-ios-home',
      disabled: true,
      badge: {
        status: 'Primary',
        title: '22',
        position: 'topStart'
      }
    },
    {
      icon: 'icon ion-ios-star-outline',
      badge: {
        status: 'Info',
        title: '55+',
        position: 'topStart'
      }
    },
    {
      icon: 'icon ion-ios-switch',
      badge: {
        status: 'Success',
        title: '34',
        position: 'topStart'
      }
    },
    {
      icon: 'icon ion-ios-albums',
      link: '/components/actions',
      badge: {
        status: 'Danger',
        title: '34',
        position: 'topStart'
      }
    },
    {
      content: 'Action',
      badge: {
        status: 'Primary',
        title: '23',
        position: 'topStart'
      }
    }
  ];
  return (
    <>
      <Card>
        <CardBody>
          <Actions Link={Link} size="LG" actions={items} />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Actions Link={Link} size="MD" actions={items} />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Actions fullWidth Link={Link} size="SM" actions={items} />
        </CardBody>
      </Card>
    </>
  );
};
export default ActionsPage;
