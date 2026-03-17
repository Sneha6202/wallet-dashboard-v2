import { useEffect, useState } from "react";

function ModalShell({ open, title, mode, onClose, onSubmit }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (open) {
      setFormData({});
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      ...formData,
      currency:
        formData.currency?.trim().toUpperCase() === "RS"
          ? "INR"
          : formData.currency?.trim().toUpperCase() || "USD"
    };

    onSubmit(payload);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-panel">
        <div className="modal-top">
          <h3>{title}</h3>
          <button className="close-x" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          {(mode === "credit" || mode === "debit") && (
            <>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="currency"
                placeholder="Currency (USD / INR)"
                onChange={handleChange}
              />
            </>
          )}

          {mode === "bank" && (
            <>
              <input
                type="text"
                name="label"
                placeholder="Bank name"
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="amount"
                placeholder="Balance"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="meta"
                placeholder="Short note"
                onChange={handleChange}
              />
            </>
          )}

          <button type="submit" className="primary-btn submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalShell;