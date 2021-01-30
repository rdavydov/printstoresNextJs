import { useRouter } from 'next/router';
import React from 'react';
import { routesConfig } from '../../../config/routes/routes';
import PromoProduct from './PromoProduct';

const PromoContainer = ({ crumbs }) => <PromoProduct crumbs={crumbs} />;

export default PromoContainer;
