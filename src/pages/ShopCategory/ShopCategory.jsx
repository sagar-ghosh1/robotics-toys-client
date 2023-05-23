import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from './ShopCard';

const ShopCategory = () => {
   const [allToy, setAllToy] = useState([]);
   const [activeTab, setActiveTab] = useState('Cat');
   console.log(allToy);

   useEffect(() => {
      fetch(`http://localhost:5000/subCategory/${activeTab}`)
         .then(res => res.json())
         .then(data => {
            setAllToy(data);
         })
   }, [activeTab])

   const handleAddClick = (tabName) => {
      setActiveTab(tabName)
   }

   return (
      <div className='mt-8 bg-sky-50'>
         <Tabs className="text-center">
            <TabList>
               <Tab>Robots Toys</Tab>
            </TabList>

            <TabPanel>
               <Tabs>
                  <TabList>
                     <Tab onClick={() => handleAddClick('medical')}>Autonomous Mobile</Tab>
                     <Tab onClick={() => handleAddClick('agricultural')}>Articulated Robots</Tab>
                     <Tab onClick={() => handleAddClick('military')}>Humanoids</Tab>
                  </TabList>

                  <TabPanel>
                     <div>
                        <div className='md:flex gap-5 justify-center'>
                           {
                              allToy.map(toy => <ShopCard
                                 key={toy._id}
                                 toy={toy}
                              ></ShopCard>)
                           }
                        </div>
                     </div>
                  </TabPanel>

                  <TabPanel>
                     <div className='md:flex gap-5 justify-center'>
                        {
                           allToy.map(toy => <ShopCard
                              key={toy._id}
                              toy={toy}
                           ></ShopCard>)
                        }
                     </div>
                  </TabPanel>

                  <TabPanel>
                     <div className='md:flex gap-5 justify-center'>
                        {
                           allToy.map(toy => <ShopCard
                              key={toy._id}
                              toy={toy}
                           ></ShopCard>)
                        }
                     </div>
                  </TabPanel>

               </Tabs>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default ShopCategory;