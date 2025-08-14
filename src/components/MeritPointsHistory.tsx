import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, Trophy, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MeritPointsHistory = () => {
  const { t } = useLanguage();

  // Mock historical data for Andrea's merit points
  const meritHistory = [
    { month: "Sept 2023", points: 145.5, ranking: 85 },
    { month: "Oct 2023", points: 167.2, ranking: 78 },
    { month: "Nov 2023", points: 189.8, ranking: 72 },
    { month: "Dec 2023", points: 210.4, ranking: 65 },
    { month: "Jan 2024", points: 234.7, ranking: 58 },
    { month: "Feb 2024", points: 256.3, ranking: 52 },
    { month: "Mar 2024", points: 278.9, ranking: 47 },
    { month: "Apr 2024", points: 301.5, ranking: 43 },
    { month: "May 2024", points: 325.8, ranking: 38 },
    { month: "Jun 2024", points: 342.1, ranking: 35 },
    { month: "Jul 2024", points: 358.7, ranking: 32 },
    { month: "Aug 2024", points: 375.2, ranking: 29 }
  ];

  const currentPoints = meritHistory[meritHistory.length - 1].points;
  const previousPoints = meritHistory[meritHistory.length - 2].points;
  const pointsGain = currentPoints - previousPoints;
  const percentageGain = ((pointsGain / previousPoints) * 100).toFixed(1);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground">{label}</p>
          <p className="text-championship-gold">
            Points: <span className="font-bold">{payload[0].value}</span>
          </p>
          <p className="text-golf-green">
            Ranking: <span className="font-bold">#{payload[1]?.value || payload[0].payload.ranking}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-championship-gold/10 text-championship-gold border-championship-gold/20">
            Merit Points Evolution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-champion">
            Andrea's Merit Points History
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track Andrea's progression in the FFGolf National Merit System over the past months
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Current Stats */}
          <Card className="shadow-golf hover:shadow-championship transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 bg-championship-gold/10 rounded-full w-fit mb-2">
                <Trophy className="w-6 h-6 text-championship-gold" />
              </div>
              <CardTitle className="text-championship-gold">Current Points</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                {currentPoints}
              </div>
              <div className="text-sm text-muted-foreground">
                Merit Points (Aug 2024)
              </div>
            </CardContent>
          </Card>

          {/* Current Ranking */}
          <Card className="shadow-golf hover:shadow-championship transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 bg-golf-green/10 rounded-full w-fit mb-2">
                <TrendingUp className="w-6 h-6 text-golf-green" />
              </div>
              <CardTitle className="text-golf-green">Current Ranking</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                #{meritHistory[meritHistory.length - 1].ranking}
              </div>
              <div className="text-sm text-muted-foreground">
                National Youth Ranking
              </div>
            </CardContent>
          </Card>

          {/* Monthly Progress */}
          <Card className="shadow-golf hover:shadow-championship transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 bg-trophy-bronze/10 rounded-full w-fit mb-2">
                <Calendar className="w-6 h-6 text-trophy-bronze" />
              </div>
              <CardTitle className="text-trophy-bronze">Monthly Progress</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                +{pointsGain.toFixed(1)}
              </div>
              <div className="text-sm text-golf-green">
                +{percentageGain}% vs last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="shadow-championship">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-golf-green" />
              Merit Points Evolution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={meritHistory}>
                  <defs>
                    <linearGradient id="pointsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--championship-gold))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--championship-gold))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="month" 
                    className="text-muted-foreground"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="points"
                    stroke="hsl(var(--championship-gold))"
                    strokeWidth={3}
                    fill="url(#pointsGradient)"
                  />
                  <Line
                    type="monotone"
                    dataKey="points"
                    stroke="hsl(var(--championship-gold))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--championship-gold))", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "hsl(var(--championship-gold))", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="text-center mt-8">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open("https://pages.ffgolf.org/merite/jeunes/messieurs", "_blank")}
          >
            <ExternalLink className="w-5 h-5" />
            View Official Rankings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MeritPointsHistory;