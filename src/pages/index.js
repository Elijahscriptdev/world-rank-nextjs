import CountriesTable from "../component/CountriesTable/CountriesTable";
import Layout from "../component/Layout/Layout";
import SearchInput from "../component/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>

      <SearchInput placeholder='Filter by Name, Region or Sub-region' />

      <CountriesTable countries={countries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
