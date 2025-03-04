import { Container, Header, Title } from "@/components/shared"
import { Filters } from "@/components/shared/filters";
import { TopBar } from "@/components/shared/top-bar";



export default function Home() {
  return (
    <>
    <Header/>
    <Container className='mt-10'>
    <Title  text="Все пиццы" className='font-extrabold' size='lg'/>
</Container>
<TopBar/>
<Container className="mt-10 pb-14">
<div className="flex gap-[60px]"></div>
  <div className="w-[250px]"></div>
  <Filters/>

<div className="flex-1"></div>
<div className="flex col gap-16">Список товаров</div>
</Container>
</>
  );
}
