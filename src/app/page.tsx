import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";

const Home = async () => {

  const { user } = await getCurrentSession();
  const products = await getAllProducts();

  return (
    <>
      <div className="">{JSON.stringify(user)}</div>
      <div className="">{JSON.stringify(products)}</div>
    </>
  );
}

export default Home;

