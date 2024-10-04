import { Avatar, Button, Flex, List, Typography } from 'antd'
import React from 'react'

const data = [
  {
    name: 'Hellen Genius',
    orderTime: 1
  },
  {
    name: 'Martin Boy',
    orderTime: 1
  },
  {
    name: 'Olivia Logan',
    orderTime: 2
  },
  {
    name: 'Hayes Hall',
    orderTime: 3
  },
  {
    name: 'Simms Samson',
    orderTime: 5
  },
];
const Activity = () => {
  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong className='primary--color'>
          Recent Activity
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>

      <List pagination dataSource={data} renderItem={(user, index)=> (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar 
                src={`https://api.dicebar.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<a href='#' >{user.name}</a>}
            description="Order a new product"
          ></List.Item.Meta>
          <span className="gray--color">
            {user.orderTime} { user.orderTime == 1 ? 'day ago' : 'days ago'}
          </span>
        </List.Item>
      )} />
    </Flex>
  )
}

export default Activity