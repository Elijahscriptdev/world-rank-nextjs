import { useState } from "react";
import CountriesTable from "../component/CountriesTable/CountriesTable";
import Layout from "../component/Layout/Layout";
import SearchInput from "../component/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");

  // filter by country name
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  console.log(countries);
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>

      <SearchInput
        placeholder='Filter by Name, Region or Sub-region'
        onChange={onInputChange}
      />

      <CountriesTable countries={filteredCountries} />
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
