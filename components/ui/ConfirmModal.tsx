"use client";

import { ReactNode } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ConfirmModalProps {

  open: boolean;

  title: string;

  message: ReactNode;

  confirmText?: string;

  cancelText?: string;

  confirmVariant?: "primary" | "danger" | "success";

  loading?: boolean;

  onConfirm: () => void;

  onClose: () => void;

}

export default function ConfirmModal({

  open,

  title,

  message,

  confirmText = "Confirmar",

  cancelText = "Cancelar",

  confirmVariant = "danger",

  loading = false,

  onConfirm,

  onClose,

}: ConfirmModalProps) {

  return (

    <Modal

      open={open}

      title={title}

      onClose={onClose}

      size="md"

      footer={

        <>

          <Button

            variant="secondary"

            onClick={onClose}

            disabled={loading}

          >

            {cancelText}

          </Button>

          <Button

            variant={confirmVariant}

            loading={loading}

            onClick={onConfirm}

          >

            {confirmText}

          </Button>

        </>

      }

    >

      <div className="space-y-6">

        <p className="text-zinc-300 text-lg">

          {message}

        </p>

      </div>

    </Modal>

  );

}