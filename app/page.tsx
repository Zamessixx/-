import { Container, Header, Title } from "@/components/shared"
import { Filters } from "@/components/shared/filters";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";



export default function Home() {
  return (
    <>
      <Header />
      <Container className='mt-10'>
        <Title text="Все пиццы" className='font-extrabold' size='lg' />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

        
        <div className="w-[250px]">
          <Filters />
        </div>


        {/*Список товаров */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductGroupList title="Пиццы" items={[{
              id: 1,
              name: 'Чизбургер-пица',
              imageUrl: 'https://image.vsem-edu-oblako.ru/upload/store/merchant1797/small/8dd955919f7647bebe923b2631d0cd68.jpg?w=600&h=450',
              price: 550,
              items: [{ price: 500 }]
            },
            {
              id: 1,
              name: 'Чизбургер-пица',
              imageUrl: 'https://image.vsem-edu-oblako.ru/upload/store/merchant1797/small/8dd955919f7647bebe923b2631d0cd68.jpg?w=600&h=450',
              price: 550,
              items: [{ price: 500 }]
            },
            {
              id: 1,
              name: 'Чизбургер-пица',
              imageUrl: 'https://image.vsem-edu-oblako.ru/upload/store/merchant1797/small/8dd955919f7647bebe923b2631d0cd68.jpg?w=600&h=450',
              price: 550,
              items: [{ price: 500 }]
            },
            {
              id: 1,
              name: 'Чизбургер-пица',
              imageUrl: 'https://image.vsem-edu-oblako.ru/upload/store/merchant1797/small/8dd955919f7647bebe923b2631d0cd68.jpg?w=600&h=450',
              price: 550,
              items: [{ price: 500 }]
            },
            {
              id: 1,
              name: 'Чизбургер-пица',
              imageUrl: 'https://image.vsem-edu-oblako.ru/upload/store/merchant1797/small/8dd955919f7647bebe923b2631d0cd68.jpg?w=600&h=450',
              price: 550,
              items: [{ price: 500 }]
            }

            ]} categoryId={1} />
          </div>
        </div>
        </div>
      </Container>
    </>
  );
}
