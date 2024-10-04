import { Button, Card, Flex, Image, Typography } from 'antd'
import React from 'react'
import productData from '../../productData'

const { Meta } = Card;
const ProductLists = () => {
  return (
    <div>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3} strong className='primary--color'>
          My Listings
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>

      <Flex align="center" gap="large">
        {productData.map((product)=> (
          <Card key={product.id} hoverable className="product-card">
            <Image src={product.picture} style={{ width: '130px' }} />
            <Meta title={product.name} style={{ marginTop: '1rem' }} />
          </Card>
        ))}
      </Flex>
    </div>
  )
}

export default ProductLists