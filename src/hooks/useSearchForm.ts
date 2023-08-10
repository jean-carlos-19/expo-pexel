import { SearchModel } from '@/models';
import { useState } from 'react';

const useSearchForm = () => {
 const [entity] = useState<SearchModel>({
  search: undefined,
 });
 return { entity };
};
export { useSearchForm };
