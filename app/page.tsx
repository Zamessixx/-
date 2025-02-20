import { Container, Header, Title } from "@/components/shared"
import { TopBar } from "@/components/shared/top-bar";



export default function Home() {
  return (
    <>
    <Header/>
    <Container className='mt-10'>
    <Title  text="Все пиццы" className='font-extrabold' size='lg'/>
</Container>
<TopBar/>
</>
  );
}
