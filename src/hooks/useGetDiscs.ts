import { useEffect, useState } from 'react';
import { parse } from 'papaparse';
import { DiscDataType } from '@/lib/types';

const useGetDiscs = (filePath: string) => {
  const [jsonData, setJsonData] = useState<DiscDataType[]>();
  const [brands, setBrands] = useState<{ value: string; label: string }[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(filePath);
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result?.value);

      parse(csv, {
        header: true,
        complete: (results) => {
          setJsonData(results.data as []);
        },
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (jsonData) {
      const brands = jsonData
        .map((driver) => ({
          value: driver.Manufacturer,
          label: driver.Manufacturer,
        }))
        .filter(
          (brand, index, self) =>
            self.findIndex((b) => b.value === brand.value) === index
        );

      setBrands([{ value: 'All', label: 'All brands' }, ...brands]);
    }
  }, [jsonData]);

  return { jsonData, brands };
};

export default useGetDiscs;
