import { NextResponse } from "next/server";

const produtos = [
    {"item": 'Camisa',
    "imagem": 'data:image/jpeg;base64,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'},
    {"item": 'Óculos',
    "imagem":},
    {"item": 'Camisa'},
    {"item": 'Camisa'},
];

export async function GET(){
      return NextResponse.json(produtos);
  
}
