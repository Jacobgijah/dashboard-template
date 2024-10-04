import { Flex } from 'antd';
import React from 'react'
import Banner from '../banner/Banner';
import ProductLists from '../product/ProductLists';
import SellerLists from '../sellerList/SellerLists';

const MainContent = () => {
  return (
    <>
      <div style={{ flex: 1 }}>
        <Flex vertical gap="2.3rem">
          <Banner />
          <ProductLists />
          <SellerLists />
        </Flex>
      </div>
    </>
  );
};

export default MainContent;