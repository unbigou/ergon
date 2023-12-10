export type ProductRes = {
  id: string;
  name: string;
  price: string;
  promotionPrice: string;
  newPrice: string;
  type: string;
  photo: string[];
  formulation: string;
  cultures: string[];
  aplication: string;
  sellerId: string;
  stock: boolean;
  rating: string;
  ratingCont: string;
  ratingMax: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PermissionRes = {
  id: string;
  name: string;
  description: string[];
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
  promotionPrice: string;
  newPrice: string;
  type: string;
  photo?: string[];
  formulation: string;
  sellerId: string;
  cultures: string[];
  aplication: string;
  stock: boolean;
};

export type ReviewReq = {
  rating: string;
  comentary: string;
  userId: string;
  productId: string;
};

export type ReviewRes = {
  id: string;
  rating: string;
  comentary: string;
  userId: string;
  productId: string;
  createdAt?: Date;
  updatedAt?: Date;
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
