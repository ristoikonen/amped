import { useState } from 'react'

import './App.css'
//import React from 'react';
import { Message, Badge, SwitchField, SelectField, TextField, Input, Label, Card, Collection,Flex, Text, Heading, Image, 
  View, Divider, Button, useTheme } from '@aws-amplify/ui-react';

 // import { IconsProvider, Rating } from '@aws-amplify/ui-react';
//import { FiStar } from 'react-icons/fi';

import products_data from './data/products'

//import iconsourcecodehover from './assets/ikons.svg'
/* import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils/utils.js"; */

//import Stat from './Stat';
//import LogoWithText from './LogoWithText';
    


function App() {
  const [products, setProducts] = useState(products_data)
  const { tokens } = useTheme();

  return (
    <>
      <div >

  <Card backgroundColor="white" 
        width="1241px" 
        fontWeight={tokens.fontWeights.medium} 
        fontSize={tokens.fontSizes.medium}
        fontFamily="Bahnschrift" 
        >
        <Flex
              gap="28px"
              direction="row"
              
              height="140px"
              justifyContent="center"
              alignContent="center"
              alignItems="flex-end"
              overflow="hidden"
             /*  position="absolute" */
              top="100px"
              left="20px"
              boxShadow="0px 2px 6px rgba(210,230,220,1)"
              borderRadius="8px"
              padding="16px 16px 16px 16px"
              backgroundColor="rgba(255,255,255,1)"

            >

          <Flex alignContent="center"  direction="row" gap="small" width="140px"  >
              <h3>Future value</h3>

            </Flex>

          <Flex direction="column" gap="small" width="140px"  >
              <Label htmlFor="investment">Investment amount</Label>
              <Input
               width="140px"
                id="investment"
                type="number"
              />
            </Flex>

              <Flex direction="column" gap="small" width="120px" >
              <Label htmlFor="investment">Interest rate</Label>
              <Input
              
              title="Interest added at end of period"
               width="120px"
                id="interest"
                type="number"
              />
          </Flex>



            <Flex direction="column" gap="small" width="120px" >
              <Label htmlFor="quantity">Enter years</Label>
              <Input
               width="110px"
                id="years"
                type="number"
              />
            </Flex>


          
              <Button
                shrink="0"
                /* size="Default" */
                isDisabled={false}
              >
                Calculate
              </Button>
           

              <Flex direction="row" gap="small" width="280px"  >
                <SwitchField
                shrink="0"
                label="Interest added at end of period"
                defaultChecked={true}
                isDisabled={false}
                labelPosition="start"
              />
            </Flex>

          </Flex>
  </Card>


    <Card backgroundColor="azure" 
          width="1241px"
          fontSize={tokens.fontSizes.large}
          fontWeight={tokens.fontWeights.semibold}
          fontFamily="Bahnschrift" 
          top="100px"
          left="20px"
          boxShadow="0px 2px 6px rgba(210,230,220,1)"
          borderRadius="8px"
          padding="16px 16px 16px 16px"
              

          >
        <Flex direction="row" alignItems="center"  width="741px"
              height="102px"
              alignContent="center"
              gap="11rem"
              >
          <Image
            alt="FV Calculator Symbol"
            src=".\src\assets\Calcicon.png"
            width="10%"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
          >

            <Heading level={5}>
              Investments future value:
            </Heading>

            <Text as="span">
              <Heading level={2}>
              23.300.00
              </Heading>
            </Text>

          </Flex>
          {/* <Message colorTheme="success">A success message</Message> */}
        </Flex>
      </Card>
  
<br/>
<Flex direction="column" alignItems="center"  width="561px"
              height="82px"
              alignContent="center"
              gap="11rem"
              >
      <label htmlFor="tac">
        <input id="tac" type="checkbox" name="terms-and-conditions" />
        I agree to the Terms and Conditions
         <span><a href="terms-and-conditions.html"> Read our Terms and Conditions</a></span></label>
      
    
       
      
</Flex>
      </div>
      
      
    </>
  )
}

export default App
