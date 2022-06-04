import { useState } from "react";

import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionMOdalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionMOdalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionMOdalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
