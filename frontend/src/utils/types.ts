export type ProductRes = {
  id: string;
  name: string;
  price: string;
  type: string;
  photo?: string[];
  formulation?: string;
  cultures?: string[];
  aplication?: string;
};

export type user = {
  name: string;
  email: string;
  confirmEmail?: string;
  password: string;
  confirmPassword?: string;
  phoneNumber?: string;
  permissionId: string;
};

export type userRes = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  permissionId: string;
};

export type login = {
  email: string;
  password: string;
};

export type authRes = {
  data: {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      permissionId: string;
    };
  };
};

export type ProductReq = {
  name: string;
  price: string;
  type: string;
  photo?: string[];
  formulation?: string;
  cultures?: string[];
  aplication?: string;
};

// export const tenProductList = [
//   {
//     id:"95",
//     name: "Bactérias",
//     price: "R$ 10,00",
//     type: "Bactérias",
//     photo: "bacteria.png",
//     formulation: "Líquida",
//     cultures: "Bacillus subtilis",
//     aplication: "Foliar",
//   },
//   {
//     id:"33",
//     name: "Fungos",
//     price: "R$ 10,00",
//     type: "Fungos",
//     photo: "fungus.png",
//     formulation: "Líquida",
//     cultures: "Trichoderma harzianum",
//     aplication: "Foliar",
//   },
//   {
//     id:"61",
//     name: "Bactérias",
//     price: "R$ 10,00",
//     type: "Bactérias",
//     photo: "bacteria.png",
//     formulation: "Líquida",
//     cultures: "Bacillus subtilis",
//     aplication: "Foliar",
//   },
//   {
//     id:"92",
//     name: "Fungos",
//     price: "R$ 10,00",
//     type: "Fungos",
//     photo: "fungus.png",
//     formulation: "Líquida",
//     cultures: "Trichoderma harzianum",
//     aplication: "Foliar",
//   },
//   {
//     id:"89",
//     name: "Bactérias",
//     price: "R$ 10,00",
//     type: "Bactérias",
//     photo: "bacteria.png",
//     formulation: "Líquida",
//     cultures: "Bacillus subtilis",
//     aplication: "Foliar",
//   },
//   {
//     id:"65",
//     name: "Fungos",
//     price: "R$ 10,00",
//     type: "Fungos",
//     photo: "fungus.png",
//     formulation: "Líquida",
//     cultures: "Trichoderma harzianum",
//     aplication: "Foliar",
//   },
//   {
//     id:"43",
//     name: "Bactérias",
//     price: "R$ 10,00",
//     type: "Bactérias",
//     photo: "bacteria.png",
//     formulation: "Líquida",
//     cultures: "Bacillus subtilis",
//     aplication: "Foliar",
//   },
//   {
//     id:"69",
//     name: "Fungos",
//     price: "R$ 10,00",
//     type: "Fungos",
//     photo: "fungus.png",
//     formulation: "Líquida",
//     cultures: "Trichoderma harzianum",
//     aplication: "Foliar",
//   },
// ] as ProductRes[];
