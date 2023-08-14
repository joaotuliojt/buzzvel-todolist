"use client";
import { Clipboard, Plus } from "lucide-react";
import { Input } from "../Input";
import { Button } from "../Button";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  description: z
    .string({ required_error: "A descrição é obrigatória" })
    .trim()
    .nonempty("A descrição é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function AddTask() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmitTask = handleSubmit(async ({ description }) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/tasks`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ description: description }),
      });

      const data = await res.json();

      //TODO

      reset();
      toast("Tarefa criada com sucesso!", { type: "success" });
    } catch (error) {
      toast("Falha ao criar tarefa!", { type: "error" });
    }
  });

  return (
    <form onSubmit={onSubmitTask} className="flex gap-2">
      <Input
        leftIcon={Clipboard}
        placeholder="Ex: Fazer café"
        errorMessage={errors.description?.message}
        {...register("description")}
      />
      <Button isLoading={isSubmitting} type="submit" variants="icon">
        <Plus size={20} />
      </Button>
    </form>
  );
}
