class Shery{
   static version = 1;
}
console.log(Shery.version)

//abstract classes 
abstract class CookingEssentials {
constructor(protected gas: number, public gasKaName: string) { }
}
class Sabji extends CookingEssentials{
}
class Cake extends CookingEssentials{
}

// here we dont have to instansiate a new class object