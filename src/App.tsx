//import React, { useState } from 'react'
import './App.css'
import { Amplify } from 'aws-amplify';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource";
import outputs from '../amplify_outputs.json'; 
import { SwitchField, Input, Label, Card, Flex, Text, Heading, Image, 
  View, Button, useTheme } from '@aws-amplify/ui-react';

 // import { IconsProvider, Rating } from '@aws-amplify/ui-react';

 // Not Authorized to access createFunk on type Mutation

 Amplify.configure(outputs);
 
/* Amplify.configure({
  // Configure API (GraphQL/Data)
  API: {
    GraphQL: {
      endpoint: import.meta.env.VITE_API_URL || '/graphql',
      defaultAuthMode: 'apiKey',
      apiKey: import.meta.env.VITE_API_KEY
    }
  }
});
 */

/* Amplify.configure({
  // Configure API (GraphQL/Data)
  API: {
    GraphQL: {
      endpoint: '/graphql',
      defaultAuthMode: 'apiKey',
      apiKey: 'dummy-api-key'
    }
  }
}); */

const client = generateClient<Schema>();


//import products_data from './data/products'

//import iconsourcecodehover from './assets/ikons.svg'
/* import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils/utils.js"; */

//import Stat from './Stat';
//import LogoWithText from './LogoWithText';

interface Funk {
  id: string; 
  content?: string;
  name?: number,
  rate?: number,
  per?:  number,
  nper?:  number,
  pmt?:  number,
  fv?: number,
  pv?:  number,
  guess?: number,
  isDueEnd?: boolean,

}

const doit  = async () => {
  try {
    // Data to be sent. Compare this with the data in the 'Create' function.
    // If 'Create' works, 'doit' might be missing required fields.
    const funkDataForDoit = {content: "aha", name: 1, rate: 1, per: 1, nper: 1, 
    pmt: 1, fv: 1, pv: 1, guess: 1, isDueEnd: true};

    console.log("Attempting to create Funk via 'doit' with data:", funkDataForDoit);
    const { data: newFunk, errors } = await client.models.Funk.create(funkDataForDoit);

    if (errors) {
      console.error("Error creating Funk in 'doit' function:", errors);
      // alert(`Error: ${errors.map(e => e.message).join(', ')}`); // Optional: for UI feedback
      return;
    }
    console.log("New Funk created successfully via 'doit':", newFunk);
  } catch (error) {
    console.error("An unexpected error occurred in 'doit' function:", error);
  }
};

async function createFunk(funkData: Omit<Funk, 'id'>) {
  try {
    
    //console.log("New Funk startrted:" + funkData.pv);
    const { data: newFunk, errors } = await client.models.Funk.create(funkData);
    if (errors) {
      console.error("Error creating Funk:", errors);
      return;
    }
    console.log("New Funk created:", newFunk);
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

async function Create() : Promise<void>
{
  console.log("Create() called ");
  await createFunk( {content: "aha", name: 1, rate: 1, per: 1, nper: 1, 
    pmt: 1, fv: 1, pv: 1, guess: 1, isDueEnd: true} );

}



function App() {
  //const [products, setProducts] = useState(products_data)
  const { tokens } = useTheme();

  

  //const ct = client.models.Funk.create().id;    
  //const ct = "aha" + client.models.Funk.create().id;
  //const ct = client.models.Funk.list.length;
  return (
    <>

    <View>
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
                onClick={doit}
              >
                Calculate
              </Button>
           
          
              <Button
                shrink="0"
                /* size="Default" */
                isDisabled={false}
                onClick={Create}
              >
                Create
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


      </View>
     
    </>
  )
}

export default App
