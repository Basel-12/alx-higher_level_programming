#include <stdio.h>
#include <stdlib.h>
#include "lists.h"
/**
 * check_cycle - function to check if list has cycle or not
 *
 * @list: pointer to head list
 *
 * Return: 1 if has cyclec otherwise return 0
 *
 */
int check_cycle(listint_t *list)
{
	listint_t *slow = list, *fast = list;

	while (fast && fast->next)
	{
		slow = slow->next;
		fast = fast->next->next;
		if (slow == fast)
			return (1);
	}
	return (0);
}
