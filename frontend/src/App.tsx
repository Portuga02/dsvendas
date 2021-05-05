import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/Navbar";

function App() {
  return (
    <>

      <NavBar />
      <div className="container">
        <h1 className="text-primary">Dashboard - Vendass</h1>

        <div className="row py-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Porcentagem de Sucesso (%%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Porcentagem de Sucesso (%%)</h5>       <DonutChart />
          </div>
        </div>

        <div className=" row py-3">
          <h2 className="text-primary">Todas às vendas</h2>
        </div>

        <DataTable />


      </div>

      <Footer />
    </>
  );
}

export default App;
