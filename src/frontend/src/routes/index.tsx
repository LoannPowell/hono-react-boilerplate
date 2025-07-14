import { getApi } from '@/lib/api'
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

const getAIAnswer = async () => {
  const api = getApi(); 
  const res = await api.ai.$get();
  if (!res.ok) throw new Error("Server error")
  const response = await res.json();
  return response;
};

function Index() {
   const { data } = useQuery({
    queryKey: ['aiAnswer'],
    queryFn: getAIAnswer,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="p-2">
      <h3>{data?.text}</h3>
    </div>
  )
}