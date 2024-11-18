import useGetDiscs from '@/hooks/useGetDiscs';
import PageTemplate from '@/components/PageTemplate';
import DropdownSelect from '@/components/DropdownSelect';
import DiscCard from '@/components/DiscCard';
import { useEffect, useState } from 'react';
import { DiscDataType } from '@/lib/types';

const Discs = () => {
  const { jsonData: allDiscs, brands } = useGetDiscs(
    '/discdata/csv/DiscData(Distance-Drivers).csv'
  );

  const getSelectedBrand = (brandValue: string) => {
    setSelectedBrand(brandValue);
  };

  const [selectedBrand, setSelectedBrand] = useState('All');
  const [filteredDiscs, setFilteredDiscs] = useState<DiscDataType[]>();

  useEffect(() => {
    if (allDiscs) setFilteredDiscs(allDiscs);
  }, [allDiscs]);

  useEffect(() => {
    const filterDiscsData = () => {
      let discs = structuredClone(allDiscs);

      if (selectedBrand !== 'All') {
        discs = discs?.filter(
          (driver) => driver.Manufacturer === selectedBrand
        );
      }

      return discs;
    };

    setFilteredDiscs(filterDiscsData());
  }, [selectedBrand]);

  return (
    filteredDiscs &&
    brands && (
      <PageTemplate title='All Discs'>
        <div className='flex gap-5 items-center mb-5'>
          <p>Filter:</p>
          {/* <DropdownSelect listOptions={frameworks} placeholder='Owned' /> */}
          <DropdownSelect
            listOptions={brands}
            placeholder='Select brand'
            defaultValue='All'
            raiseSelectedValue={getSelectedBrand}
            inputPlaceHolder='Search Brands'
            noneFoundText='No brand found...'
          />
        </div>
        <div className='flex w-full items-center flex-col sm:grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4'>
          {filteredDiscs?.map((disc) => {
            return (
              <DiscCard
                key={disc.Disc}
                manufacturer={disc.Manufacturer}
                disc={disc.Disc}
                speed={disc.Speed}
                glide={disc.Glide}
                fade={disc.Fade}
                turn={disc.Turn}
              />
            );
          })}
        </div>
      </PageTemplate>
    )
  );
};

export default Discs;
