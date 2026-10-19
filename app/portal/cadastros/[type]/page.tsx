import { notFound } from "next/navigation";
import { RegistrationForm, type RegistrationKind } from "@/components/public/registration-form";

export function generateStaticParams() { return ["atleta","equipe","corrida"].map(type => ({type})); }
export const metadata = { title:"Cadastro demonstrativo" };
export default async function RegistrationPage({params}:{params:Promise<{type:string}>}) { const {type}=await params; if(!["atleta","equipe","corrida"].includes(type)) notFound(); return <RegistrationForm kind={type as RegistrationKind}/>; }
