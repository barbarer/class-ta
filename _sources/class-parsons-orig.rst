Parsons Practice Problems
-----------------------------------------------------

Please answer
the following problems to the best of your ability without any
outside help. You can stop working on a problem after you worked
on it for about five minutes without solving it.

Problems
==============

.. parsonsprob:: Classes_Basic_FortuneTeller_pp_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a class ``FortuneTeller`` with an ``__init__`` method that takes a list of fortunes as strings and saves that as an attribute.  Then create a ``tell_fortune`` method that returns one of the fortunes in the list at random.
    -----
    import random
    =====
    class FortuneTeller:
    =====
        def __init__(self, fortunes):
    =====
            self.fortunes = fortunes
    =====
        def tell_fortune(self):
    =====
        def tell_fortune(): #paired
    =====
            last = len(self.fortunes) - 1
    =====
            last = len(self.fortunes) #paired
    =====
            index = random.randint(0, last)
    =====
            return self.fortunes[index]
    =====
            return fortunes[index] #paired

.. activecode:: Classes_Basic_FortuneTeller_ac_v2
   :autograde: unittest

   Write a class ``FortuneTeller`` with an ``__init__`` method that takes a list of fortunes as strings and saves that as an attribute.  Then create a ``tell_fortune`` method that returns one of the fortunes in the list at random.
   ~~~~

   f = FortuneTeller(["You will get an A", "You will have a great day", "You will fall", "You will laugh"])
   for i in range(5):
        print(f.tell_fortune())

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           l = ["You will get an A", "You will have a great day", "You will fall", "You will laugh"]
           f = FortuneTeller(l)
           for i in range(5):
               s = f.tell_fortune()
               self.assertIn(s, l, "checking that the fortune in is the list")

   myTests().main()
