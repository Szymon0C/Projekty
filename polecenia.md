# zadanieJavaS
1. Stwórz zmienną:
a) typu string o nazwie name i wartości 'Jan',
b) typu number o nazwie age i wartości 22,
c) typu boolean o nazwie isOpen i wartości true,
d) typu string o nazwie stringBoolean o wartości true
e) typu string o nazwie stringNumber o wartości 100

2. Za pomocą console.log wyświetl wyniki poniższych równań przypisując je do zmiennej:
a) przypisz do zmiennej wynik reszty z dzielenia 10 przez 4
b) utwórz i zrób console.log zmiennej zawierającej zdanie "Tomasz ma 33 lata" 
gdzie 33 i "Tomasz" to również będą zmienne
c) Utwórz string "Jan kowalski" na dwa sposoby dodając przerwe między wyrazami, 
które są nastepującymi stringami: const firstName = 'jan', const lastName = 'kowalski'
(Podpowiedź: możesz użyć sposobu standardowego i z użyciem ``)

3. Dodaj dwie cyfry(dowolnie wybranych) do zmiennej, później zrób consol.log tej zmiennej,
aby wyświetliło się w następujący sposób: 'wynik', 4  <--- (4 to przykładowa wartość zmiennej)

4. Stwórz tablicę:
a) 3 elementową z cyframi od 1 do 3
b) 3 elementową z markami aut,
c) 3 elementową składającą się z wartości true, false i true
d) pustą tablicę,
e) składającą się z 5 dowolonych wartości z pomieszanymi typami,
f) zrób console.loga w którym z powyższej tablicy wyświetlasz wartość która jest
druga w kolejności od początku,
g) *** Jaka właściwość i jak użyta słuzy do wyświetlenia długości tablicy? Stwórz własną tablicę
z 3 elementami i wyświetl za pomocą consol.log jej długość,
h) *** Czy wiesz jak stworzyć pustę tablicę ? dodać do niej losową wartość i wyświetlić za pomocą
console.loga już zmienioną tablicę?
i) *** Stwórz tablicę z obiektami, które będą zawierały imię, nazwisko i wiek osoby,
tablica powinna zawierać 3 takie obiekty i wyświetl imię drugiej osoby z tej tablicy,
j) *** stwórz zmienną z wartością = 2 i powiedz czy da sie tą zmienną umieścić w 
deklaracji tablicy tak aby uzyskać tablicę const arr = [2] ? 

5. Stwórz obiekt:
a) pusty obiekt,
b) obiekt o nazwe person zawierający klucz name i jego wartość 'Iza',
c) obiekt o nazwe personDetails zawierający dane o osobie jak name, lastName, age, drivingLicence
gdzie ten ostatni powinien być booleanem, w zależności od tego czy osoba ma prawo jazdy czy nie
d) z cils zrób consol.log samego wieku,
e) zrób console.log całego obiektu,
f) stwórz obiekt, który zawiera marke, kolor, rok produkcji auta oraz tablicę z
latami w których samochód był sprzedany innemu właścicielowi, możesz wpisać dowolny
3 daty zawierające tylko rok, chodzi tutaj o dodanie tablicy wewnątrz obiektu,

6. Warunki i zmienne:
a) Podaj przykład i różnice między typem wartościowym, a referencyjnym? Czyli czym
różnią się zmienne proste od złożonych?
b) Stwórz obiekt person zawierający dane takie jak imie, nazwisko, wiek, posiadanie prawa
jazdy(true lub false) oraz czy osoba jest pijana(rowniez true false), następnie
stwórz instrukcje warunkową która w zależnosci od tego jakie dane będą w zmiennych
wypisze nam czy dana osoba może jechać autem czy nie, weź pod uwage wszystkie aspekty
jak wiek, bycie pijanym oraz posiadanie prawa jazdy,
c) Znasz sposób jak zdestrukturyzować obiekt tak aby móc w bardzo łatwy sposób
użyć kluczy w nim zawartych, np. majac obiekt: 
const car = {
  name: 'mustang',
  productionYear: 2020,
  color: 'red'
}
Chciałbym utworzyć następującą zmienną: 
const result = `Moje auto to ${name} i zostało wyprodukowane w roku ${productionYear}` 
Jak zrobić aby taka zmienna wyświetliła poprawne dane z obiektu, nie zmieniając treści zmiennej?
d) Skróć zapis kodu jak najbardziej się da bez usuwania zmiennej isAdult
(zrób to na dwa sposoby, bez użycia ternary operatora i z uzyciem):
const isAdult = true
if(isAdult === true) {
  return 'Możesz kupić alkohol
} else if(isAdult === false) {
  return 'Nie możesz kupić alkoholu, jesteś nieletni!'
}
