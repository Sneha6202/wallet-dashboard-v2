import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import SectionTitle from "../components/SectionTitle";
import BalanceHero from "../components/BalanceHero";
import QuickActionBar from "../components/QuickActionBar";
import StatTile from "../components/StatTile";
import TrendPanel from "../components/TrendPanel";
import BankList from "../components/BankList";
import VaultList from "../components/VaultList";
import ActivityPanel from "../components/ActivityPanel";
import ModalShell from "../components/ModalShell";

import {
  getOverview,
  addMoneyApi,
  cashOutApi,
  addBankApi,
  deleteActivityApi
} from "../services/http";

function OverviewPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("all");

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await getOverview();
      setData(response.data.payload);
    } catch (error) {
      alert("Failed to load overview");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const visibleActivity = useMemo(() => {
    if (!data) return [];

    let result = [...data.activityLog];

    if (filterValue !== "all") {
      result = result.filter((item) => item.category === filterValue);
    }

    if (searchValue.trim()) {
      const q = searchValue.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.currency.toLowerCase().includes(q) ||
          item.state.toLowerCase().includes(q)
      );
    }

    return result;
  }, [data, filterValue, searchValue]);

  const handleAddMoney = async (payload) => {
    try {
      await addMoneyApi(payload);
      setActiveModal("");
      loadData();
    } catch (error) {
      alert(error?.response?.data?.message || "Add money failed");
    }
  };

  const handleCashOut = async (payload) => {
    try {
      await cashOutApi(payload);
      setActiveModal("");
      loadData();
    } catch (error) {
      alert(error?.response?.data?.message || "Cash out failed");
    }
  };

  const handleAddBank = async (payload) => {
    try {
      await addBankApi(payload);
      setActiveModal("");
      loadData();
    } catch (error) {
      alert(error?.response?.data?.message || "Bank link failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteActivityApi(id);
      loadData();
    } catch (error) {
      alert("Delete failed");
    }
  };

  if (loading) {
    return <div className="screen-loader">Loading wallet dashboard...</div>;
  }

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="workspace">
        <header className="topbar">
          <div>
            <h1>Wallet Overview</h1>
            <p>Monitor your funds, bank links and transaction activity.</p>
          </div>

          <div className="topbar-search">
            <input type="text" placeholder="Quick search" />
          </div>
        </header>

        <BalanceHero walletData={data.walletData} />

        <QuickActionBar
          onAddMoney={() => setActiveModal("credit")}
          onCashOut={() => setActiveModal("debit")}
          onAddBank={() => setActiveModal("bank")}
        />

        <div className="stats-row">
          <StatTile
            label="Total Income"
            value={`${data.walletData.currencyCode} ${data.walletData.totalIncome.toLocaleString()}`}
            helper="Credits tracked in wallet"
            variant="income"
          />
          <StatTile
            label="Total Expense"
            value={`${data.walletData.currencyCode} ${data.walletData.totalExpense.toLocaleString()}`}
            helper="Debits tracked in wallet"
            variant="expense"
          />
          <StatTile
            label="Linked Banks"
            value={data.linkedBanks.length}
            helper="External accounts connected"
          />
        </div>

        <div className="content-grid">
          <section className="left-stack">
            <TrendPanel data={data.walletData.trend} />

            <section>
              <SectionTitle
                title="Linked Bank Accounts"
                subtitle="External accounts connected to this wallet"
              />
              <BankList items={data.linkedBanks} />
            </section>

            <section>
              <SectionTitle
                title="Vault Spaces"
                subtitle="Grouped reserve balances inside your wallet"
              />
              <VaultList items={data.vaults} />
            </section>
          </section>

          <section className="right-stack">
            <ActivityPanel
              items={visibleActivity}
              filterValue={filterValue}
              searchValue={searchValue}
              onFilterChange={setFilterValue}
              onSearchChange={setSearchValue}
              onDelete={handleDelete}
            />
          </section>
        </div>
      </main>

      <ModalShell
        open={activeModal === "credit"}
        title="Add Money"
        mode="credit"
        onClose={() => setActiveModal("")}
        onSubmit={handleAddMoney}
      />

      <ModalShell
        open={activeModal === "debit"}
        title="Cash Out"
        mode="debit"
        onClose={() => setActiveModal("")}
        onSubmit={handleCashOut}
      />

      <ModalShell
        open={activeModal === "bank"}
        title="Link New Bank"
        mode="bank"
        onClose={() => setActiveModal("")}
        onSubmit={handleAddBank}
      />
    </div>
  );
}

export default OverviewPage;