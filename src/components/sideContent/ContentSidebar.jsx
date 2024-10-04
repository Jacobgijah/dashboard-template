import { Card, Flex, Image, Typography } from 'antd'
import React from 'react'

import product from '../../assets/img/hero_image.png'

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap="large">
          <Typography.Title level={4} strong>
            Today <br />
            5 orders
          </Typography.Title>
          <Typography.Title level={4} strong>
            This Month <br />
            240 orders
          </Typography.Title>
        </Flex>
        <Image
          src={product}
          alt="product_1"
          style={{ 
            position: "absolute",
            bottom: -30,
            left: 140,
            height: "250px",
            width: "auto",
          }} 
        />
      </Card>
    </div>
  )
}

export default ContentSidebar