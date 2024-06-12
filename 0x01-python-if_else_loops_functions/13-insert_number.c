#include <stdio.h>
#include <stdlib.h>
#include "lists.h"
#include <string.h>
/**
 * insert_node - function to insert node in sorted linked list
 *
 * @head: pointer to poiner to first node
 *
 * @number: value of new node
 *
 * Return: address of new node
 *
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *cur = *head, *temp;
	listint_t *new = (listint_t *)malloc(sizeof(listint_t));

	if (!new || !head)
		return (NULL);
	if (!*head)
	{
		new->n = number;
		new->next = *head;
		*head = new;
		return (new);
	}
	if (number <= (*head)->n)
	{
		new->n = number;
		new->next = *head;
		*head = new;
		return (new);
	}
	while (cur)
	{
		temp = cur->next;
		if (number >= cur->n && number <= temp->n)
			break;
		cur = cur->next;
	}
	new->n = number;
	new->next = cur->next;
	cur->next = new;
	return (new);
}
