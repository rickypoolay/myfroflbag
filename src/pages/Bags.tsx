import BagCard from '@/components/BagCard';
import PageTemplate from '@/components/PageTemplate';

const Bags = () => {
  return (
    <PageTemplate title='Bags'>
      <div className='grid grid-cols-3 gap-4'>
        <BagCard />
        <BagCard />
        <BagCard />
        <BagCard />
        <BagCard />
        <BagCard />
        <BagCard />
        <BagCard />
        <BagCard />
        <BagCard />
        <BagCard />
        <BagCard />
      </div>
    </PageTemplate>
  );
};

export default Bags;
