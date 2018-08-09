import React from 'react';

import {Breadcrumb} from 'antd';

function AppBreadcrumb({location}) {
    // console.log(location, 'location');
    const path = location.pathname.replace('/', '').split('/');
    // console.log(path, 'path');
    let breadcrumb = [];
    switch (path[1]) {
        case 'option1':
            breadcrumb = ['Option1'];
            break;
        case 'option2':
            breadcrumb = ['Option2'];
            break;
        case 'tom':
            breadcrumb = ['User', 'Tom'];
            break;
        case 'bill':
            breadcrumb = ['User', 'Bill'];
            break;
        case 'alex':
            breadcrumb = ['User', 'Alex'];
            break;
        case 'team1':
            breadcrumb = ['Team', 'Team1'];
            break;
        case 'team2':
            breadcrumb = ['Team', 'Team2'];
            break;
        case 'file':
            breadcrumb = ['File'];
            break;
        default:
            break;
    }

    return (
        <Breadcrumb style={{margin: '16px 0'}}>
            {breadcrumb.map((item, index) => <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)}
            {/*<Breadcrumb.Item>User</Breadcrumb.Item>*/}
            {/*<Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
        </Breadcrumb>
    );
}

export default AppBreadcrumb;
