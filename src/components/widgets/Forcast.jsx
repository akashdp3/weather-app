import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const Forcast = () => {
  return (
    <Card className="flex-1 w-32">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Weekly Forcast</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Forcast</p>
      </CardContent>
    </Card>
  );
};

export default Forcast;
