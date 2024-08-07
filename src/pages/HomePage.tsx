import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'

import { db } from 'config/firebaseConfig'
import { Notification } from 'features/common/types'

const HomePage = () => {

  const [notifications, setNotifications] = useState<Notification[]>([]);

  const fetchNotifications = async () => {
    const querySnapshot = await getDocs(collection(db, 'notifications'))
    const notificationsData = querySnapshot.docs.map(d => ({
      id: d.id,
      ...d.data()
    })) as Notification[]
    setNotifications(notificationsData)
  };

  const addNotification = async (message: string) => {
    await addDoc(collection(db, 'notifications'), { message, read: false })
    await fetchNotifications()
  }

  const markAsRead = async (id: string) => {
    await updateDoc(doc(db, 'notifications', id), { read: true })
    await fetchNotifications()
  }

  useEffect(() => {
    fetchNotifications().then()
  }, [])

  return (
    <div className='flex flex-col rounded-t-3xl bg-white h-full'>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <div className="space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => addNotification('Notification 1')}
          >
            Notify 1
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => addNotification('Notification 2')}
          >
            Notify 2
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => addNotification('Notification 3')}
          >
            Notify 3
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {notifications.map(notification => (
            <li key={notification.id} className="py-4 flex justify-between items-center">
              <span className={`${notification.read ? 'text-gray-500' : 'text-black'}`}>
                {notification.message}
              </span>
              {!notification.read && (
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                  onClick={() => markAsRead(notification.id)}
                >
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomePage
