import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const routes = [
    { id: 1, name: 'Вулкан Ключевская Сопка', type: 'volcano', difficulty: 'Сложный', duration: '3-4 дня', lat: 56.05, lng: 160.64 },
    { id: 2, name: 'Долина Гейзеров', type: 'geyser', difficulty: 'Средний', duration: '1 день', lat: 54.43, lng: 160.14 },
    { id: 3, name: 'Курильское озеро', type: 'wildlife', difficulty: 'Легкий', duration: '2 дня', lat: 51.45, lng: 157.10 },
    { id: 4, name: 'Мутновский вулкан', type: 'volcano', difficulty: 'Средний', duration: '2 дня', lat: 52.45, lng: 158.19 },
    { id: 5, name: 'Налычевские термальные источники', type: 'geyser', difficulty: 'Легкий', duration: '1 день', lat: 53.31, lng: 158.83 },
  ];

  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);

  const volcanoes = [
    {
      name: 'Ключевская Сопка',
      height: '4750 м',
      status: 'Активный',
      description: 'Самый высокий действующий вулкан Евразии',
    },
    {
      name: 'Мутновский',
      height: '2323 м',
      status: 'Активный',
      description: 'Вулкан с фумарольными полями и ледниками',
    },
    {
      name: 'Авачинский',
      height: '2741 м',
      status: 'Активный',
      description: 'Популярный вулкан для восхождений',
    },
  ];

  const geysers = [
    {
      name: 'Великан',
      height: '40 м',
      period: 'Каждые 4-5 часов',
      description: 'Один из самых мощных гейзеров',
    },
    {
      name: 'Жемчужный',
      height: '12 м',
      period: 'Каждые 2 часа',
      description: 'Красивый гейзер с радужными брызгами',
    },
  ];

  const wildlife = [
    {
      name: 'Бурый медведь',
      population: '~20 000',
      icon: '🐻',
      description: 'Камчатка — дом для одной из крупнейших популяций',
    },
    {
      name: 'Сивуч',
      population: '~15 000',
      icon: '🦭',
      description: 'Морские львы на побережье',
    },
    {
      name: 'Белоплечий орлан',
      population: '~4 000 пар',
      icon: '🦅',
      description: 'Редкая хищная птица',
    },
  ];

  const gallery = [
    {
      title: 'Извержение вулкана',
      image: 'https://cdn.poehali.dev/projects/ad8d4447-ac13-4143-88b7-9a5692d2f4a6/files/d9474717-4c5d-4d1c-a6df-deb1d4703ada.jpg',
    },
    {
      title: 'Медведь на рыбалке',
      image: 'https://cdn.poehali.dev/projects/ad8d4447-ac13-4143-88b7-9a5692d2f4a6/files/e2543f85-57a1-45f4-8f18-0d9bae9dd46e.jpg',
    },
    {
      title: 'Долина Гейзеров',
      image: 'https://cdn.poehali.dev/projects/ad8d4447-ac13-4143-88b7-9a5692d2f4a6/files/c7e7108e-6ff5-433f-a6c9-1b205c55ed5a.jpg',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легкий':
        return 'bg-green-500';
      case 'Средний':
        return 'bg-yellow-500';
      case 'Сложный':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getRouteIcon = (type: string) => {
    switch (type) {
      case 'volcano':
        return 'Flame';
      case 'geyser':
        return 'Droplets';
      case 'wildlife':
        return 'TreePine';
      default:
        return 'MapPin';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Mountain" size={32} />
              Камчатка
            </h1>
            <div className="flex gap-4">
              {[
                { id: 'main', label: 'Главная', icon: 'Home' },
                { id: 'routes', label: 'Маршруты', icon: 'Map' },
                { id: 'volcanoes', label: 'Вулканы', icon: 'Flame' },
                { id: 'geysers', label: 'Гейзеры', icon: 'Droplets' },
                { id: 'wildlife', label: 'Животные', icon: 'Squirrel' },
                { id: 'gallery', label: 'Галерея', icon: 'Images' },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className="hidden md:flex items-center gap-2"
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="main"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://cdn.poehali.dev/projects/ad8d4447-ac13-4143-88b7-9a5692d2f4a6/files/d9474717-4c5d-4d1c-a6df-deb1d4703ada.jpg)',
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold text-primary mb-6">
              Камчатка
            </h2>
            <p className="text-2xl md:text-3xl text-foreground mb-8">
              Земля вулканов, гейзеров и дикой природы
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                onClick={() => scrollToSection('routes')}
                className="text-lg group"
              >
                <Icon name="Map" size={24} className="mr-2" />
                Маршруты
                <Icon name="ChevronRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('gallery')}
                className="text-lg"
              >
                <Icon name="Images" size={24} className="mr-2" />
                Галерея
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Flame', label: '29 вулканов', color: 'text-accent' },
              { icon: 'Droplets', label: '200+ гейзеров', color: 'text-secondary' },
              { icon: 'TreePine', label: '14 заповедников', color: 'text-green-600' },
              { icon: 'Award', label: 'ЮНЕСКО', color: 'text-primary' },
            ].map((stat, idx) => (
              <Card key={idx} className="hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name={stat.icon} size={48} className={`mx-auto mb-3 ${stat.color}`} />
                  <p className="font-semibold">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="min-h-screen py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary">
            Интерактивная карта маршрутов
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-8 relative min-h-[500px] shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {routes.map((route) => (
                    <div
                      key={route.id}
                      className={`absolute cursor-pointer transition-all ${
                        selectedRoute === route.id ? 'scale-125 z-10' : 'hover:scale-110'
                      }`}
                      style={{
                        left: `${((route.lng - 157) / 4) * 100}%`,
                        top: `${100 - ((route.lat - 51) / 5.5) * 100}%`,
                      }}
                      onClick={() => setSelectedRoute(route.id)}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                          selectedRoute === route.id
                            ? 'bg-primary ring-4 ring-primary/30'
                            : 'bg-white hover:bg-primary/10'
                        }`}
                      >
                        <Icon
                          name={getRouteIcon(route.type)}
                          size={24}
                          className={selectedRoute === route.id ? 'text-white' : 'text-primary'}
                        />
                      </div>
                      {selectedRoute === route.id && (
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48">
                          <div className="bg-white rounded-lg shadow-xl p-3 text-sm animate-scale-in">
                            <p className="font-bold text-center">{route.name}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Популярные маршруты</h3>
              {routes.map((route) => (
                <Card
                  key={route.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedRoute === route.id ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedRoute(route.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon name={getRouteIcon(route.type)} size={24} className="text-primary" />
                          <h4 className="font-bold text-lg">{route.name}</h4>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                          <Badge className={getDifficultyColor(route.difficulty)}>
                            {route.difficulty}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {route.duration}
                          </Badge>
                        </div>
                      </div>
                      <Icon
                        name="ChevronRight"
                        size={24}
                        className={`transition-transform ${
                          selectedRoute === route.id ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="volcanoes" className="min-h-screen py-20 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-accent">
            <Icon name="Flame" size={56} className="inline-block mr-4" />
            Вулканы Камчатки
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {volcanoes.map((volcano, idx) => (
              <Card
                key={idx}
                className="hover:scale-105 transition-transform cursor-pointer group overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-red-500 to-orange-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Mountain" size={80} className="text-white/30 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-red-600">{volcano.status}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{volcano.name}</h3>
                  <p className="text-xl text-primary font-semibold mb-3">{volcano.height}</p>
                  <p className="text-muted-foreground">{volcano.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="geysers" className="min-h-screen py-20 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-secondary">
            <Icon name="Droplets" size={56} className="inline-block mr-4" />
            Гейзеры и термальные источники
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {geysers.map((geyser, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <Icon name="Droplets" size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{geyser.name}</h3>
                      <div className="space-y-2 mb-3">
                        <Badge variant="outline" className="mr-2">
                          Высота: {geyser.height}
                        </Badge>
                        <Badge variant="outline">{geyser.period}</Badge>
                      </div>
                      <p className="text-muted-foreground">{geyser.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="wildlife" className="min-h-screen py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-green-700">
            <Icon name="Squirrel" size={56} className="inline-block mr-4" />
            Животный мир
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {wildlife.map((animal, idx) => (
              <Card
                key={idx}
                className="hover:scale-105 transition-transform cursor-pointer overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <div className="text-8xl animate-float">{animal.icon}</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{animal.name}</h3>
                  <p className="text-lg text-green-700 font-semibold mb-3">
                    Популяция: {animal.population}
                  </p>
                  <p className="text-muted-foreground">{animal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary">
            <Icon name="Images" size={56} className="inline-block mr-4" />
            Галерея
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white text-2xl font-bold p-6">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-accent text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Mountain" size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Откройте для себя Камчатку</h3>
          <p className="text-white/80 mb-6">Земля огня и льда ждёт вас</p>
          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
